from django.shortcuts import render, HttpResponse

from rest_framework.response import Response
from rest_framework import viewsets

from core.models import Member
from core.serializers import MemberSerializer, MemberSimpleSerializer


# Create your views here.
class MemberViewSet(viewsets.ModelViewSet):
    serializer_class = MemberSerializer
    queryset = Member.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimpleSerializer(queryset, many=True)
        return Response(serializer.data)