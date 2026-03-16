import { NextResponse } from 'next/server';
import { redisSubscriber } from '@/app/lib/redis';

export async function GET() {
  const stream = new ReadableStream({
    async start(controller) {
      const channel = 'reox_community_updates';

      // Keep connection alive
      const keepAlive = setInterval(() => {
        try {
          controller.enqueue(':\n\n'); // SSE comment to keep connection open
        } catch (e) {
          clearInterval(keepAlive);
        }
      }, 30000);

      const subscribeListener = (receivedChannel: string, message: string) => {
        if (receivedChannel === channel) {
          try {
            const data = `data: ${message}\n\n`;
            controller.enqueue(data);
          } catch (e) {
            // Controller might be closed
          }
        }
      };

      try {
        await redisSubscriber.subscribe(channel);
        redisSubscriber.on('message', subscribeListener);
      } catch (e) {
        console.error('Failed to subscribe to Redis:', e);
      }

      // Handle stream teardown
      // No extra teardown needed
      return () => {
        clearInterval(keepAlive);
        redisSubscriber.off('message', subscribeListener);
        redisSubscriber.unsubscribe(channel).catch(() => {});
      };
    },
    cancel() {
      // Reached when client disconnects
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
