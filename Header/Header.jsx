import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">

                    <a class="logo navbar-brand" href="#">
                    <h3>Seese</h3>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span class="navbar-toggler-icon">
                            <i class="fa-solid fa-bars-staggered"></i>
                        </span>
                    </button>

                    <div class="collapse navbar-collapse" id="nav">

                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Shop
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Shop type</a></li>
                                    <hr />
                                    <li><a class="dropdown-item" href="#">SHOP FULLWIDTH</a></li>
                                    <li><a class="dropdown-item" href="#">SHOP WITH SIDEBAR</a></li>


                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">BOLG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>


                        </ul>
                        <div class="icon">
                        <i class="fa-solid fa-magnifying-glass m-2"></i>
                        <i class="fa-solid fa-bag-shopping m-2"></i>
                        <i class="fa-regular fa-user m-2"></i>
                        </div>
                    </div>
                </div>
            </nav>

           
        </div>
    )
}
