import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .post('', this.createMission)
  }

  async getMissions(request, response, next) {
    try {
      const missions = await missionsService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async createMission(request, response, next) {
    try {
      const
    } catch (error) {
      next(error)
    }
  }

}