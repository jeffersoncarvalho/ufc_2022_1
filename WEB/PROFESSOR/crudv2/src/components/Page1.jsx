import * as React from "react";
import { Link } from "react-router-dom";

function Page1() {
    return (
        <>
            <main>
                <h2>
                    Page 1
                </h2>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Page1