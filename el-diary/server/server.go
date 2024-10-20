package server

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"el-diary/el-diary/api"
)

type Server struct {
	*echo.Echo
}

func New() Server {
	return Server{echo.New()}
}

func (s Server) Run() {
	s.Use(middleware.Logger())

	s.GET("/", api.Home)

	s.Logger.Panic(s.Start(":8080"))
}
