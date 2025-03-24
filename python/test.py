import subprocess

def check_installed_programs():
    command = 'powershell "Get-WmiObject -Query \'SELECT * FROM Win32_Product\' | Select-Object Name, Version"'
    result = subprocess.run(command, capture_output=True, text=True, shell=True)
    print(result.stdout)

if __name__ == "__main__":
    check_installed_programs()