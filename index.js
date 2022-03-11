from selenium import webdriver
import requests
import time
import re
from random import choice, randint
from string import digits, ascii_uppercase
from multiprocessing import Pool

options = webdriver.ChromeOptions()
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--incognito")
options.add_argument("--disable-blink-features")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)
options.add_argument("--disable-plugins-discovery");
options.add_argument('--profile-directory=Default')
options.add_argument("--mute-audio")
# options.add_extension("MetaMask.crx")
# options.add_extension("Phantom.crx")
# options.add_argument("--window-size=1920,1080")
options.add_argument('headless')
