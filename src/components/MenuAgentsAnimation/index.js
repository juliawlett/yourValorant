// import { fetchAgents } from "../../service/apiService";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// function MenuAgentsAnimation() {
//     const [agents, setAgents] = useState([]);

//     useEffect(() => {
//         const getAgents = async () => {
//             try {
//                 const agentsData = await fetchAgents();
//                 setAgents(agentsData);
//                 console.log('Dados dos Agentes recebidos com sucesso.');
//             } catch (error) {
//                 toast.error("Erro ao buscar agentes!");
//                 console.error('Erro ao buscar agentes:', error);
//             }
//         };

//         getAgents();
//     }, []);

//     const groupByRole = (agents) => {
//         return agents.reduce((acc, agent) => {
//             const role = agent.role.displayName;
//             if (!acc[role]) {
//                 acc[role] = [];
//             }
//             acc[role].push(agent);
//             return acc;
//         }, {});
//     };

//     const groupedAgents = groupByRole(agents);

//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 1,
//             slidesToSlide: 1
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 1,
//             slidesToSlide: 1
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//             slidesToSlide: 1
//         }
//     };

//     return (
//         <div className="flex flex-col gap-10 carousel-container">
//             <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 autoPlay={true}
//                 autoPlaySpeed={4000}
//                 keyBoardControl={true}
//                 customTransition="all .100s"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//                 showDots={true}
//                 arrows={true}
//             >
//                 {Object.keys(groupedAgents).map((roleName) => (
//                     <div key={roleName} id={roleName} className="grupo-agents-`${roleName}` flex flex-col bg-primary" style={{ height: '90vh' }}>
//                         <h3 className="fixed z-50 top-24 left-36 w-min text-7xl bg-white font-CalSans text-primary px-2">{roleName}</h3>
//                         <div className="flex max-w-3xl xl:max-w-5xl m-auto justify-center">
//                             {groupedAgents[roleName].map((agent, index) => (
//                                 <div
//                                     key={agent.uuid}
//                                     className="transition-all duration-300 hover:scale-105"
//                                     style={{ width: '400px', height: '600px', backgroundImage: `url: ` }}
//                                 >
//                                     <img
//                                         src={agent.fullPortrait}
//                                         alt={agent.displayName}

//                                         style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                             backgroundColor: `#${agent.backgroundGradientColors?.[1]?.slice(0, 6)}`,
//                                             backgroundImage: `url(${agent.background})`,
//                                             backgroundSize: 'cover',
//                                             backgroundPosition: 'center',
//                                             backgroundRepeat: 'no-repeat'
//                                         }}

//                                         className=""
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     )
// }

// export default MenuAgentsAnimation;