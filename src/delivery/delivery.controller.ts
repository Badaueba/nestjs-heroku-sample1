import { Controller, Get } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Delivery Data')
@Controller('delivery')
export class DeliveryController {
	constructor(private deliveryService: DeliveryService) {}

	@Get()
	getSquareMeter(): Promise<number> {
		return this.deliveryService.getSquareMeter();
	}
}
