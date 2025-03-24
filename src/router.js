import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import ProgramPilihan from "./pages/ProgramPilihan/list.vue";
import AddProgramPilihan from "./pages/ProgramPilihan/add.vue";
import EditProgramPilihan from "./pages/ProgramPilihan/edit.vue";
import Siswa from "./pages/Siswa/list.vue";
import AddSiswa from "./pages/Siswa/add.vue";
import EditSiswa from "./pages/Siswa/edit.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import NotFound from "./pages/NotFound.vue";
import useUserStore from './store/user'

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {path: "/", name: "Home", component: Home},
            
            {path: "/program-pilihan", name: "ProgramPilihan", component: ProgramPilihan},
            {path: "/program-pilihan/add", name: "AddProgramPilihan", component: AddProgramPilihan},
            {path: "/program-pilihan/edit/:id", name: "EditProgramPilihan", component: EditProgramPilihan},

            {path: "/siswa", name: "Siswa", component: Siswa},
            {path: "/siswa/add", name: "AddSiswa", component: AddSiswa},
            {path: "/siswa/edit/:id", name: "EditSiswa", component: EditSiswa},
        ],
        beforeEnter: async (to, from, next) => {
            try {
                const userStore = useUserStore();
                await userStore.fetchUser();
                next();
            } catch (error) {
                next(false);
            }
        }
    },
    {
        path: "/login",
        name: 'Login',
        component: Login,
    },
    {
        path: "/signup",
        name: 'Signup',
        component: Signup,
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router