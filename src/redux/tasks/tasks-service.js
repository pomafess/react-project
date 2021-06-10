import BaseHttpService from '../../shared/service/base-http-service'

class TaskService extends BaseHttpService {

  async addTask (body) {
    try {
      const data = await this.post('task', body);
        return data;
    } catch (error) {
    }
  }

}

export default TaskService
