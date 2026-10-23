import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { AcademyHome } from './pages/AcademyHome';
import { LearnerPortal } from './pages/LearnerPortal';
import { SimulationLab } from './pages/SimulationLab';
import { ReportingDashboard } from './pages/ReportingDashboard';
const links = [{to:'/',label:'Academy'},{to:'/learn',label:'Learner Portal'},{to:'/simulation',label:'Simulation Lab'},{to:'/reports',label:'Reports'}];
export function App(){return <><a className="skip" href="#content">Skip to content</a><header className="site-header"><Link className="brand" to="/">GLOWAY <span>ACADEMY</span></Link><nav aria-label="Main navigation">{links.map(x=><NavLink key={x.to} end={x.to==='/'} to={x.to}>{x.label}</NavLink>)}</nav></header><main id="content"><Routes><Route path="/" element={<AcademyHome/>}/><Route path="/learn" element={<LearnerPortal/>}/><Route path="/simulation" element={<SimulationLab/>}/><Route path="/reports" element={<ReportingDashboard/>}/><Route path="*" element={<section className="panel"><h1>Page not found</h1><Link to="/">Return to Academy</Link></section>}/></Routes></main><footer>Gloway Academy · Practical international food trade learning</footer></>}
