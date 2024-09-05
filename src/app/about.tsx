import { NextPage } from "next";
import Link from "next/link";
export default async function page() {
    return(
        <div>
            <h1>
                New Page
            </h1>
            <Link href = "/">
            Back
            </Link>
        </div>
    );
}