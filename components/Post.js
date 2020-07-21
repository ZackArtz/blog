import Link from "next/link";

export default function Post({ date, title, link }) {
    return (
        <span>
        <span className="af-view">
            <Link href={`/${link}`}>
                <a id="w-node-fea94191f5f1-e60f5b40" className="af-class-post w-inline-block">
                    <h6 className="af-class-date">{date}</h6>
                    <h1 className="af-class-post-title">{title}</h1>
                </a>
            </Link>
        </span>
      </span>
    )
}