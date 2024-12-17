<?php

namespace App\Enums;

enum StatusEnum: string
{
    case SHOOTING = "SHOOTING";
    case EDITING = "EDITING";
    case PRODUCER_VALIDATION = "PRODUCER_VALIDATION";
    case MCR_VALIDATION = "MCR_VALIDATION";
    case ON_AIR = "ON_AIR";
}
