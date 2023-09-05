"use client"

import Link from "next/link"
import MatchStats from "../pages/MatchStats"

export default function Home() {
    return (
        <div>
            <Link href="/">
                <MatchStats />
            </Link>
        </div>
    )
}
