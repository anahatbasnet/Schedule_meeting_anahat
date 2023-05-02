import { useSelector } from "react-redux";
import Cards from "./Cards";
import "../assets/Front.css";


const Rootlayout = () => {
  const fifteenminSlice = useSelector((state)=>state.fifteenminSlice.fifteenminValue) 
  const thirtyminSlice = useSelector ((state)=>state.thirtyminSlice.thirtyminValue )
  const thirtyval=useSelector((state)=>state.thirtyminSlice.thirtyVal)
  const fifteenval=useSelector((state)=>state.fifteenminSlice.fifteenVal)
  const thirtyLink=useSelector((state)=>state.thirtyminSlice.thirtyLink)
  const fifLink=useSelector((state)=>state.fifteenminSlice.fifLink)
 
  return (
    <>
      <></>
    <div className="full">

      <div className="intro">
        <h1>Anahat Basnet</h1>
        <p>ReactJs|Frontend Developer</p>
      </div>
      <div className="home">

      <Cards Minute = {fifteenminSlice} Val={fifteenval} MLink={fifLink} />
      <Cards Minute = {thirtyminSlice} Val={thirtyval} MLink={thirtyLink} />
      </div>
    </div>
    </>
  );
};
export default Rootlayout;
