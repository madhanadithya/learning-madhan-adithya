import { lazy } from "react";

import { Suspense } from "react";
import LazyComponent from "./LazyComponent";

const RenderLoading = () => <div> Loading...</div>
const LazyHome =()=>{
    return(
        <div>
            <h1> home page</h1>
            <Suspense fallback={RenderLoading()}>
                <LazyComponent/>
            </Suspense>
        </div>
    );
};

export default LazyHome;