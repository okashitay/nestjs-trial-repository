import { CacheModule, Module } from '@nestjs/common';
import * as memcachedStore from 'cache-manager-memcached-store';
import * as Memcache from 'memcache-pp';

@Module({
  imports: [
    CacheModule.register({
      store: memcachedStore,
      driver: Memcache,
      options: {
        hosts: [`${process.env.MEMCACHED_HOST}:${process.env.MEMCACHED_PORT}`],
        ttl: 10,
        max: 5
      },
    }),
  ],
  exports: [CacheModule]
})
export class MemcachedModule {}
