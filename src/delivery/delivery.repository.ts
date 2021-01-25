import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryRepository {
	async findOneMeterValue(): Promise<number> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(100);
			}, 2000);
		});
	}
}
