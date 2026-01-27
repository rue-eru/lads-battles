'use client'

import { useState } from "react";
import type { NavDropdownProps } from "../utils/interfaces-data";
import Image from "next/image";

export default function NavDropdown ({
    label, children
} : NavDropdownProps) {

    const [open, setOpen] = useState(false);

    return (
        <div 
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}

        >
            <div className="flex items-center gap-1 uppercase">
                <span className="hover:text-pink-400">{label}</span>
                 <Image
                    src="/images/icons/dropdown-arrow.png"
                    alt="dropdown arrow"
                    width={1.75}
                    height={3}
                    className={`object-contain h-1.75 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
                    unoptimized
                    loading="eager"
                 />
            </div>
            {open && children}
        </div>
    )
}