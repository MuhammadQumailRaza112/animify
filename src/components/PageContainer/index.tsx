import dynamic from "next/dynamic";
import { PageContainerProps } from "./types";

export default dynamic(() => import('./default/index'), {
    ssr: true
})

export type { PageContainerProps }