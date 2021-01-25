import { Injectable } from '@nestjs/common';
import { DeliveryRepository } from './delivery.repository';

@Injectable()
export class DeliveryService {
	constructor(private deliveryRepository: DeliveryRepository) {}
	getSquareMeter(): Promise<number> {
		return this.deliveryRepository.findOneMeterValue();
	}
}
