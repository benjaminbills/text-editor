from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Post
from base.serializers import PostSerializer
@api_view(['POST'])
def add_post(request):
  data = request.data
  post = Post.objects.create(
    title=data['title'],
    body = data['body']
  )
  serializer = PostSerializer(post, many=False)
  return Response(serializer.data)

@api_view(['GET'])
def get_post(request, pk):
  post = Post.objects.get(id=pk)
  
  serializer = PostSerializer(post, many=False)
  return Response(serializer.data)