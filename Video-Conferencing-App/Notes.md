# Project - Video Conferencing App

## Fundamentals

Socket
    - A Socket is one end of connection
    - Socket is made up of ip and port

Protocols
    - Communication rules
    
    1. TCP (Transmission Control Protocol)
        - browser, google drive uses this protocol
        - reliable
        - slow as compare to UDP
        - connection based protocol

    2. UDP (User Datagram Protocol)
        - faster but less reliable
        - eg. video call
        - connectionless protocol

### WebRTC for Vidio communication
    - Web Real Time Communication
    - Build primirily on UDP
    - Open source protocol (Bi-direction)

    Stages:
        1. Signalling
            - Signalling server
            - SDP (Session Description protocol)
        2. Connecting
            - ICE (Interactive Connectivity protocol)
        3. Securing
            - DLTS & SRTP
        4. Communicating
            - RTP & SCTP

    API's:
        1. MediaStream
        2. RTCPeerConnection
        3. RTCDataChannel