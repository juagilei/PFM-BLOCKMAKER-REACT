import { useReadContract } from 'wagmi'
import {PrestamoDefiABI} from '../contracts/ABIs'


export default function AltaPrestamistaCliente() {

    const result = useReadContract({
        abi: PrestamoDefiABI,
        address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
        functionName: 'socioPrincipal',
    }
        )
    return (
        <div className='text-white'>
            {console.log(result)};
           <p>hola que tal</p>
        </div>

    )
}