import { useContext } from "react"
import { LiveContext } from "../../context/LiveContext"

const Live = () => {

    const {live} = useContext(LiveContext) as { live: number };

  return (
    <div>Live : {live}</div>
  )
}

export default Live