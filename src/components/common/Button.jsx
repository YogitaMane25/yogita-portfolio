import {ArrowUpRight} from 'lucide-react';
export default function Button({children,href='#',secondary=false}){return <a className={`btn ${secondary?'btn-secondary':''}`} href={href}>{children}<ArrowUpRight size={16}/></a>}
