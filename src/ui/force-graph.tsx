"use client";
import data from "@/data/data.json";
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

interface CustomNodeDatum extends d3.SimulationNodeDatum {
  id: string;
  // group: string;
  radius: number;
}

interface CustomLinkDatum extends d3.SimulationLinkDatum<CustomNodeDatum> {
  source: string | CustomNodeDatum;
  target: string | CustomNodeDatum;
  value: number;
}

const GraphFeature: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const width = 384;
  const height = 384;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .style("max-width", "100%")
      .style("height", "100%");

    const links: CustomLinkDatum[] = data.links.map((d) => ({ ...d }));
    const nodes: CustomNodeDatum[] = data.nodes.map((d) => ({ ...d }));
    const g = svg.append("g");
    const simulation = d3
      .forceSimulation<CustomNodeDatum>(nodes)
      .force(
        "link",
        d3
          .forceLink<CustomNodeDatum, CustomLinkDatum>(links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("x", d3.forceX().strength(0.02))
      .force("y", d3.forceY().strength(0.02))
      .force(
        "collide",
        d3.forceCollide((d) => d.radius + 5)
      )
      .force("center", d3.forceCenter().strength(0.1));

    const link = g
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = g
      .attr("stroke", "#a1a1a1")
      .attr("stroke-width", 1.5)
      .selectAll<SVGCircleElement, CustomNodeDatum>("cirlce")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", "#cacaca")
      .call(
        d3
          .drag<SVGCircleElement, CustomNodeDatum>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const label = g
      .selectAll("text")
      .data(
        nodes.filter(
          (d) =>
            d.id === "René Decartes" ||
            d.id === "Philosophy" ||
            d.id === "Books"
        )
      )
      .join("text")
      .text((d) => d.id)
      .attr("fill", "#e4e4e4")
      .attr("stroke", "none")
      .attr("font-weight", "medium")
      .attr("font-size", "17px");

    node
      .append("text")
      .text(function (d) {
        return d.id;
      })
      .attr("x", 13)
      .attr("y", 13);

    // node.append("title").text(function (d) {
    //   return d.id;
    // });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as CustomNodeDatum).x!)
        .attr("y1", (d) => (d.source as CustomNodeDatum).y!)
        .attr("x2", (d) => (d.target as CustomNodeDatum).x!)
        .attr("y2", (d) => (d.target as CustomNodeDatum).y!);
      // node.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      label.attr("x", (d) => d.x! + 10).attr("y", (d) => d.y! + 4);
    });

    function dragstarted(
      event: d3.D3DragEvent<SVGCircleElement, CustomNodeDatum, any>
    ) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(
      event: d3.D3DragEvent<SVGCircleElement, CustomNodeDatum, any>
    ) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(
      event: d3.D3DragEvent<SVGCircleElement, CustomNodeDatum, any>
    ) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Cleanup on unmount
    return () => {
      simulation.stop();
      svg.selectAll("*").remove();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default GraphFeature;
