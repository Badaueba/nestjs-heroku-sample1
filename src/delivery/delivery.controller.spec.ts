import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryRepository } from './delivery.repository';

describe('DeliveryController', () => {
	let deliveryController: DeliveryController;
	let deliveryService: DeliveryService;
	let deliveryRepository: DeliveryRepository;

	beforeEach(() => {
		deliveryRepository = new DeliveryRepository();
		deliveryService = new DeliveryService(deliveryRepository);
		deliveryController = new DeliveryController(deliveryService);
	});

	describe('Get', () => {
		it('should be a number', async () => {
			expect(await deliveryController.getSquareMeter()).toBeGreaterThan(0);
		});
	});
});
