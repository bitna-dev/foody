import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Layout from "./Layout";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
          Nextmap
        </Link>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item btn-primary">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item btn-primary">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar__list--item btn-primary">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar__list--item btn-primary">
            로그인
          </Link>
        </div>
        {/* Mobile button */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => {
            setIsOpen((val) => !val);
          }}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {/* Mobile NavBar */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/stores" className="navbar__list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar__list--item--mobile">
              맛집 등록
            </Link>
            <Link href="/users/likes" className="navbar__list--item--mobile">
              찜한 가게
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
