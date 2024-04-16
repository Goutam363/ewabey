import "./FooterBottom.css";

export default function FooterBottom() {
  return (
    <div className="footer-bottom" style={{ textAlign: "center" }}>
      <p className="text-white" style={{ color: "white" }}>
        Copyright &copy;{" "}
        <a href="https://ewabey.com" target="_blank">
          Ewabey
        </a>
        . All Rights Reserved
      </p>
    </div>
  );
}
