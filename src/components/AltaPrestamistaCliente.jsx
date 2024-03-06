import { useReadContract, useAccount } from 'wagmi'
import {PrestamoDefiABI} from '../contracts/ABIs'
import {AltaPrestamista} from './'


export default function AltaPrestamistaCliente() {

    const {data} = useReadContract({
        abi: PrestamoDefiABI,
        address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
        functionName: 'socioPrincipal',
    })

    const { address } = useAccount()

    return (
        <div>
            {data === address ? (
                <AltaPrestamista />
            ) : (
            <p>No eres socio principal</p>
           )}

        </div>

    )
}