import httpService from './http.service';
const todosEndepoint = 'todos/';
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    add: async () => {
        const { data } = await httpService.post(todosEndepoint, {
            params: {
                _limit: 1,
            },
        });
        return data;
    },
};
export default todosService;
