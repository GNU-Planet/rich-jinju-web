import { Module } from '@nestjs/common';
import { DetachedController } from './detached.controller';
import { DetachedService } from './detached.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetachedHouseRent } from './entity/detached.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetachedHouseRent])],
  controllers: [DetachedController],
  providers: [DetachedService],
})
export class DetachedModule {}
