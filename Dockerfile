FROM node:16
RUN git clone https://github.com/Nastyc1g/PASCHAL-MD /root/Nastyc1g
WORKDIR /root/Nastyc1g
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#paschal
