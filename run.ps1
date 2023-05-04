#!/usr/bin/env pwsh

If( -Not (Get-Command python -ErrorAction SilentlyContinue) )
{
  Write-Host "Python NOT FOUND" -ForegroundColor Red
  Write-Host "Please install python before use this script"
}
Else
{
  Start-Process python -ArgumentList '-m', 'http.server', '5000', '--directory', $PSScriptRoot, '-b', '127.0.0.1'`
  -RedirectStandardOutput $PSScriptRoot/log.out -RedirectStandardError $PSScriptRoot/log.err

  Start chrome "http://127.0.0.1:5000"
}
