import React, { useEffect, useState } from 'react';
import { fetchAgents } from '../../service/apiService';
import style from './Carrossel.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarrosselAgents() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAgents();
                console.log('Agentes adicionados')
                setAgents(data)
                console.log(data)
            } catch (error) {
                console.error('Erro ao buscar agentes:', error);
            }
        }
        fetchData()
    }, []);

    const groupByFunction = (agents) => {
        return agents.reduce((acc, agent) => {
            const role = agent.role.displayName;
            console.log(role)
            if (!acc[role]) {
                acc[role] = [];
            }

            acc[role].push(agent);
            return acc;
        }, {})
    }

    const groupedAgents = groupByFunction(agents);
    console.log(groupedAgents)

    const responsive = {
        ultraLargeDesktop: {
            breakpoint: { max: 5000, min: 4000 },
            items: 1,
        },
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2560 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 2560, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='bg-blue-300 w-full h-2/4'>
            <Carousel
                responsive={responsive}
                arrows={true}
                autoPlaySpeed={3}
                infinite={true}  
                sliderClass="h-full"
                containerClass="h-full"
            >
                {Object.keys(groupedAgents).map((role) => (
                    <div key={role} className='h-full w-full m-auto bg-red-500 flex gap-5'>
                        <p key={role.id}>{role}</p>
                        {groupedAgents[role].map(agent =><img className='flex-1' src={agent.fullPortrait} />)}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarrosselAgents;