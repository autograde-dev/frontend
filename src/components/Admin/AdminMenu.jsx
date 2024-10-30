import CreateUserForm from "./CreateUserForm";
import ExamenStatusTable from "./ExamenStatusTable";


const AdminMenu = () => (
    <div className="h-screen bg-gray-900 text-white font-roboto p-8">
        <h1 className="text-3xl mb-8">Admin Dashboard</h1>
        <div className="flex flex-col space-y-8">
            <CreateUserForm />
            <ExamenStatusTable />
        </div>
    </div>
);

export default AdminMenu;
