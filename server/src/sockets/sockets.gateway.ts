import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(3001)
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  handleDisconnect(client: Socket) {
    console.log('Socket disconnected. Id: ', client.id);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('New connection. Id:', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('New message:', data);
    client.emit('message', 'Hello from server');
  }
}
