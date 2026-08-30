import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function NavDropdown({
  label,
  items,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() =>
        setOpen(true)
      }
      onMouseLeave={() =>
        setOpen(false)
      }
    >
      <button
        type="button"
        onClick={() =>
          setOpen((value) => !value)
        }
        className="flex items-center gap-1.5 text-[17px] font-medium text-[hsl(215_35%_24%)] hover:text-[hsl(205_78%_40%)] transition-colors"
      >
        {label}

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-3 w-60 z-50">

          <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-[hsl(205_38%_88%)] bg-white p-2 shadow-xl shadow-blue-100/60">

            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() =>
                  setOpen(false)
                }
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-[hsl(215_35%_24%)] hover:bg-[hsl(205_50%_93%)] hover:text-[hsl(205_78%_40%)] transition-colors"
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}