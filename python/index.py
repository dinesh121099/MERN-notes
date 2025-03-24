import psutil
import time
from scapy.all import ARP, sniff

# Simulated MAC Address Table (Like a Switch Table)
mac_table = {}

def learn_mac_address(src_mac, port):
    """ Simulates learning MAC addresses in a switch """
    mac_table[src_mac] = port
    print(f"Learned: {src_mac} -> Port {port}")

def forward_packet(src_mac, dst_mac, port):
    """ Simulates switch packet forwarding """
    if dst_mac in mac_table:
        print(f"Forwarding packet from {src_mac} to {dst_mac} via Port {mac_table[dst_mac]}")
    else:
        print(f"Flooding packet from {src_mac} to all ports except {port} (Unknown MAC)")

def sniff_packets():
    """ Sniffs network packets and learns MAC addresses """
    print("\n[Sniffing Network Packets to Learn MAC Addresses]\n")
    packets = sniff(count=10, filter="arp or ether", timeout=20)  # Capture ARP & Ethernet packets
    for packet in packets:
        if packet.haslayer(ARP):
            src_mac = packet.hwsrc
            dst_mac = packet.hwdst
            port = "Simulated_Port_1"
            learn_mac_address(src_mac, port)
            forward_packet(src_mac, dst_mac, port)

def display_arp_table():
    """ Fetches ARP table from Windows system """
    print("\n[Current ARP Table from Windows]\n")
    for iface, addrs in psutil.net_if_addrs().items():
        for addr in addrs:
            if addr.family == psutil.AF_LINK:  # MAC Address
                print(f"Interface: {iface}, MAC: {addr.address}")

if __name__ == "__main__":
    display_arp_table()
    sniff_packets() 