"use client"

import React from "react"
import { cn } from "@/lib/utils"

type ImageSource = { src: string; alt?: string }

type ShowImageListItemProps = {
  text: string
  images: [ImageSource, ImageSource]
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  // responsive image container sizing
  const imageContainerClass = "hidden sm:block absolute -right-8 -top-6 md:-right-10 md:-top-8 z-40 h-[120px] md:h-[160px] w-[160px] md:w-[224px]"
  const imageEffectClass =
    "relative duration-500 delay-100 shadow-sm group-hover:shadow-md opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-14 md:w-20 h-14 md:h-20 overflow-hidden transition-all rounded-md"

  return (
    <span className="reveal-item group relative inline-block align-baseline mx-1 md:mx-2">
      <button
    type="button"
    className="reveal-trigger reveal-trigger-text inline-block text-[24px] md:text-[32px] lg:text-[40px] leading-[0.95] transition-colors duration-300 group-hover:opacity-50 focus:outline-none"
    aria-label={text}
  >
        {text}
      </button>

      {/* gold circle separator - responsive sizing */}
      <span className="reveal-separator inline-block w-3 h-3 md:w-4 md:h-4 bg-[#de8c04] mx-1.5 md:mx-2.5 rounded-full align-middle" aria-hidden />

      <span className={imageContainerClass} aria-hidden>
        <span className={imageEffectClass}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover rounded-md" loading="lazy" />
        </span>
      </span>
    </span>
  )
}

export function RevealImageList({ className }: { className?: string }) {
  // Maritime services and offerings - all caps
  const paragraph =
    "MARITIME BUSINESS DIVERSIFICATION, MARITIME PORT AND SHIPPING LOGISTICS RELATED SERVICES, LEGAL TECHNICAL AND COMPLIANCE SERVICES, CREW MANAGEMENT CREW MANNING AND TRAINING, CARGO SEGMENTS, CARGO HANDLING, SHORE-BASED OPERATIONS, BERTH MANAGEMENT, VALUE-ADDED MARITIME AND PORT SERVICES, INSURANCE HULL CARGO AND P&I COVERAGE, HULL & MACHINERY (H&M), SHIP SURVEY AS PER PORT STATE / FLAG STATE, SHIP CHARTERING AND BROKERAGE, LIGHT VESSELS, AND BUILDING DOCKING REPAIR AND MAINTENANCE."

  const items: ShowImageListItemProps[] = [
    {
      text: "MARITIME BUSINESS DIVERSIFICATION",
      images: [
        { src: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg", alt: "Maritime business diversification container ship" },
        { src: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg", alt: "Container ship loading operations" },
      ],
    },
    {
      text: "MARITIME, PORT AND SHIPPING LOGISTICS RELATED SERVICES",
      images: [
        { src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg", alt: "Maritime port shipping logistics" },
        { src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg", alt: "Cargo ship at port terminal" },
      ],
    },
    {
      text: "LEGAL, TECHNICAL AND COMPLIANCE SERVICES",
      images: [
        { src: "https://images.pexels.com/photos/7841841/pexels-photo-7841841.jpeg", alt: "Legal technical compliance documents" },
        { src: "https://images.pexels.com/photos/7841841/pexels-photo-7841841.jpeg", alt: "Maritime compliance agreements" },
      ],
    },
    {
      text: "CREW MANAGEMENT, CREW MANNING AND TRAINING",
      images: [
        { src: "https://images.pexels.com/photos/5416489/pexels-photo-5416489.jpeg", alt: "Crew maritime training teamwork" },
        { src: "https://images.pexels.com/photos/5416489/pexels-photo-5416489.jpeg", alt: "Sailors on vessel training" },
      ],
    },
    {
      text: "CARGO SEGMENTS",
      images: [
        { src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg", alt: "Cargo containers segments" },
        { src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg", alt: "Cargo ship container operations" },
      ],
    },
    {
      text: "CARGO HANDLING",
      images: [
        { src: "https://images.pexels.com/photos/6169661/pexels-photo-6169661.jpeg", alt: "Cargo handling loading operations" },
        { src: "https://images.pexels.com/photos/6169661/pexels-photo-6169661.jpeg", alt: "Loading cargo boxes" },
      ],
    },
    {
      text: "SHORE-BASED OPERATIONS",
      images: [
        { src: "https://images.pexels.com/photos/126624/pexels-photo-126624.jpeg", alt: "Shore based maritime operations professionals" },
        { src: "https://images.pexels.com/photos/126624/pexels-photo-126624.jpeg", alt: "Maritime professionals training" },
      ],
    },
    {
      text: "BERTH MANAGEMENT",
      images: [
        { src: "https://images.pexels.com/photos/28772403/pexels-photo-28772403.jpeg", alt: "Port berth management terminal" },
        { src: "https://images.pexels.com/photos/28772403/pexels-photo-28772403.jpeg", alt: "Container ship berth terminal" },
      ],
    },
    {
      text: "VALUE-ADDED MARITIME AND PORT SERVICES",
      images: [
        { src: "https://images.pexels.com/photos/18590757/pexels-photo-18590757.jpeg", alt: "Value added port maritime services" },
        { src: "https://images.pexels.com/photos/18590757/pexels-photo-18590757.jpeg", alt: "Maritime vessel port services" },
      ],
    },
    {
      text: "INSURANCE: HULL, CARGO, AND P&I COVERAGE",
      images: [
        { src: "https://images.pexels.com/photos/18538834/pexels-photo-18538834.jpeg", alt: "Maritime insurance hull cargo coverage" },
        { src: "https://images.pexels.com/photos/18538834/pexels-photo-18538834.jpeg", alt: "Offshore maritime insurance" },
      ],
    },
    {
      text: "HULL & MACHINERY (H&M)",
      images: [
        { src: "https://images.pexels.com/photos/34922816/pexels-photo-34922816.jpeg", alt: "Ship hull machinery inspection" },
        { src: "https://images.pexels.com/photos/34922816/pexels-photo-34922816.jpeg", alt: "Maritime hull machinery" },
      ],
    },
    {
      text: "SHIP SURVEY AS PER PORT STATE / FLAG STATE",
      images: [
        { src: "https://images.pexels.com/photos/31148241/pexels-photo-31148241.jpeg", alt: "Ship survey port state inspection" },
        { src: "https://images.pexels.com/photos/31148241/pexels-photo-31148241.jpeg", alt: "Naval dock ship inspection" },
      ],
    },
    {
      text: "SHIP CHARTERING AND BROKERAGE",
      images: [
        { src: "https://images.pexels.com/photos/3338019/pexels-photo-3338019.jpeg", alt: "Ship chartering brokerage operations" },
        { src: "https://images.pexels.com/photos/3338019/pexels-photo-3338019.jpeg", alt: "Port cargo operations chartering" },
      ],
    },
    {
      text: "LIGHT VESSELS",
      images: [
        { src: "https://images.pexels.com/photos/35010605/pexels-photo-35010605.jpeg", alt: "Light vessel maritime navigation" },
        { src: "https://images.pexels.com/photos/35010605/pexels-photo-35010605.jpeg", alt: "Light vessel at sea" },
      ],
    },
    {
      text: "BUILDING, DOCKING, REPAIR AND MAINTENANCE",
      images: [
        { src: "https://images.pexels.com/photos/3819524/pexels-photo-3819524.jpeg", alt: "Ship repair docking maintenance" },
        { src: "https://images.pexels.com/photos/3819524/pexels-photo-3819524.jpeg", alt: "Maritime vessel maintenance repair" },
      ],
    },
  ]

  return (
    <div className={cn("reveal-list-root mx-auto px-3 md:px-4 py-8 md:py-12 text-center reveal-list-max", className)}>
      <div className="reveal-list-wrapper inline-block">
        <p className="reveal-paragraph text-center leading-relaxed md:leading-loose">{/* continuous sentence with inline text */}
          {items.map((it, idx) => (
            <React.Fragment key={idx}>
              <RevealImageListItem text={it.text} images={it.images} />
              {" "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}
