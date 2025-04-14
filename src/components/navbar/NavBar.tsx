"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/lib/navbar.constant";
import { IconBrandGithub } from "@tabler/icons-react";

import { useState } from "react";
import { Button } from "../ui/button";
import ContactsDiaLogBox from "../contacts/Contacts";

export function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className=" ">
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4 z-50">
        <a
  target="_blank"
  rel="noopener noreferrer"
  href="https://github.com/nithin5754?tab=repositories"
>
  <Button variant={"outline"}>
    <IconBrandGithub />
  </Button>
</a>
<ContactsDiaLogBox/>

     
        </div>
      </NavBody>

      {/* Mobile  */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
          <a
  target="_blank"
  rel="noopener noreferrer"
  href="https://github.com/nithin5754?tab=repositories"
>
  <Button variant={"outline"}>
    <IconBrandGithub /> Github
  </Button>
</a>
            <ContactsDiaLogBox/>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
