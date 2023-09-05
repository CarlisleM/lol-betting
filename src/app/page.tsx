"use client"

import {
    DollarCircleOutlined,
    HomeOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons"
import Link from "next/link"

import About from "../pages/About"
import BetHistory from "../pages/BetHistory"
import MatchStats from "../pages/MatchStats"

export default function Home() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    left: "40%",
                    width: "100%",
                    height: 40,
                    position: "fixed",
                    flexDirection: "row",
                }}
            >
                {/* TODO: Update the about page and the bet history page */}
                {/* <div>
                    <Link style={{ padding: "0px 5px" }} to="/">
                        <HomeOutlined
                            style={{
                                fontSize: "24px",
                                color: "black",
                                paddingTop: 10,
                            }}
                        />
                    </Link>
                </div>
                <div>
                    <Link style={{ padding: "0px 5px" }} to="/about">
                        <InfoCircleOutlined
                            style={{
                                fontSize: "24px",
                                color: "black",
                                paddingTop: 10,
                            }}
                        />
                    </Link>
                </div>
                <div>
                    <Link style={{ padding: "0px 5px" }} to="/history">
                        <DollarCircleOutlined
                            style={{
                                fontSize: "24px",
                                color: "black",
                                paddingTop: 10,
                            }}
                        />
                    </Link>
                </div> */}
            </div>

            {/* <Link href="/about">
                <About />
            </Link> */}
            {/* <Link href="/history">
                <BetHistory />
            </Link> */}
            <Link href="/">
                <MatchStats />
            </Link>
        </div>
    )
}
