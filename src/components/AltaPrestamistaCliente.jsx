import { useReadContract } from 'wagmi'
import {PrestamoDefiABI} from '../contracts/ABIs'


export default function AltaPrestamistaCliente() {

    const {data} = useReadContract({
        abi: PrestamoDefiABI,
        address: '0xC3b356B7Ca071Bf9D552E8CFE552dF94721e11F2',
        functionName: 'socioPrincipal',
    }
        )
    return (
        <div>
           
           <p>hola que tal</p>
        </div>

    )
}