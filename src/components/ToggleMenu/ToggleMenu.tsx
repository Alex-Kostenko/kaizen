"use client";

import menu from "/public/icons/menu.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import Link from "next/link";
import instagram from "/public/icons/instagram.svg";
import { Info, Instagram, LinkList, ModalContent } from "./style";

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.onresize = handleResize;
  }, []);

  return (
    <div className="modal-toggle">
      <div onClick={handleToggleOpen}>
        <Image src={menu} alt={"Menu"} />
      </div>
      <Modal open={open}>
        <ModalContent>
          <LinkList>
            <Link onClick={handleToggleOpen} href={"/"}>
              HOME
            </Link>
            <Link onClick={handleToggleOpen} href={"/#about"}>
              ABOUT
            </Link>
            <Link onClick={handleToggleOpen} href={"/#services"}>
              SERVICES
            </Link>
            <Link onClick={handleToggleOpen} href={""}>
              MY BASKET
            </Link>
            <Link onClick={handleToggleOpen} href={"/#contacts"}>
              CONTACTS
            </Link>
          </LinkList>
          <Instagram
            target="_blank"
            href="https://www.instagram.com/kaizenpro.j/"
          >
            <Image src={instagram} alt={"Instagram logo"} />
            kaizenpro.j
          </Instagram>
          <Info>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/refund">Refund Policy</Link>
          </Info>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ToggleMenu;
