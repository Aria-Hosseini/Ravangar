import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import AdminDashboard from './AdminDashboardClient';

export default async function AdminDashboardPage() {
const cookieStore = await cookies();
const token = cookieStore.get('adminToken')?.value;


  if (!token) {
    redirect('/admin/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return <AdminDashboard />;
  } catch (error) {
    redirect('/admin/login');
  }
}
