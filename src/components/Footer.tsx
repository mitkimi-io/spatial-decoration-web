"use client";

import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <span className="footer-label">生态系统：</span>
            <div className="footer-links-inline">
              <a
                href="https://open.mitkimi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                黑米说开放平台
              </a>
              <span className="footer-separator">|</span>
              <a
                href="https://lab.mitkimi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                黑米实验室
              </a>
            </div>
          </div>

          <div className="footer-section">
            <span className="footer-label">文档：</span>
            <div className="footer-links-inline">
              <Link href="#">用户指南</Link>
              <span className="footer-separator">|</span>
              <Link href="#">主题说明</Link>
              <span className="footer-separator">|</span>
              <Link href="#">FAQ</Link>
              <span className="footer-separator">|</span>
              <Link href="#">用户协议</Link>
              <span className="footer-separator">|</span>
              <Link href="#">隐私政策</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            视界时光 ©️ Copyright{" "}
            <a
              href="https://vt.mitkimi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vt.mitkimi.com
            </a>{" "}
            2022-{currentYear}
          </div>
          <div className="footer-bottom-right">京ICP备15063748号-3</div>
        </div>
      </div>
    </footer>
  );
}
