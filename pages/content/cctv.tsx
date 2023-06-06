import { withAuth } from "@/components/hocs/withAuth";

const cctv = () => {
    return(
        <div>
            CCTV
        </div>
    )
}

export default withAuth(cctv);