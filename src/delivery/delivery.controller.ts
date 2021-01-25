import { Controller, Get } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Delivery Data')
@Controller('delivery')
export class DeliveryController {
	constructor(private deliveryService: DeliveryService) {}

	@ApiOperation({
		summary: 'Returns the price per square meter',
	})
	@ApiResponse({
		status: 200,
		type: Number,
		description: 'Returns the default price per square meter',
	})
	@Get('/meter-price')
	getSquareMeter(): Promise<number> {
		return this.deliveryService.getSquareMeter();
	}
}
