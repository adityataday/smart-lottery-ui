import Head from "next/head"
import Header from "../components/Header"
import LotteryEntrace from "../components/LotteryEntrace"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Lottery</title>
                <meta name="description" content="Smart Contract based lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrace />
        </div>
    )
}
